
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import CustomFilter from './CustomFilter';
import { schema, data } from './data/table-data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema,
      data: JSON.parse(JSON.stringify(data)),
      stats: {},
      edit: '',
      ref: null,
      depth: null,
      filter: null,
      showFilter: false,
      options: [],
      selection: null,
      comparisonFilter: {},
      reset: false,
      reload: false
    };
  }
  componentDidMount() {
    // calculate table stats for first render
    this.setStats();
  }
  reload = () => {
    this.setState({
      data: JSON.parse(JSON.stringify(data)),
      ref: null,
      edit: '',
      selection: null,
      showFilter: false,
      filter: null,
      reset: false,
      reload: false
    });
  }
  setStats = () => {
    // this method calculates the average weight, height, and total age for the data values
    // it is triggered whenever an edit is made to a cell
    let { data } = this.state;
    let totalHeight = 0;
    let totalWeight = 0;
    let sumAge = 0;

    let heightCount = 0;
    let weightCount = 0;

    // gaurd against user editing values to NaN values,
    // correct average calculations in case this occurs
    for (let item of data) {
      if (!Number.isNaN(item.features.height)) {
        totalHeight += item.features.height;
        heightCount++
      }
      if (!Number.isNaN(item.features.weight)) {
        totalWeight += item.features.weight;
        weightCount++
      }
      if (!Number.isNaN(item.features.age)) {
        sumAge += item.features.age;
      }
    };

    let avgHeight = (totalHeight / heightCount).toFixed(2);
    let avgWeight = (totalWeight / weightCount).toFixed(2)

    let stats = {
      avgHeight,
      avgWeight,
      sumAge
    };
    this.setState({ stats });
  }
  filter = (identifier) => {
    
    let elems = [];
    let { data, selection } = this.state;

    // this helper function takes information based on the user's selection for a filter
    // and applies the appropriate filter to the data
    function filterHelper(section, target) {
      return data.reduce((accum, curr) => {
        if (curr[section][target] && typeof curr[section][target] !== 'boolean') {
          accum.push(curr[section][target]);
        } else if (typeof curr[section][target] === 'boolean') {
          if (curr[section][target]) {
            accum.push('TRUE');
          } else {
            accum.push('FALSE');
          }
        } else {
          accum.push('NULL');
        }
        return accum;
      }, []).reduce((uniq, curr) => {
        return (uniq.indexOf(curr) === -1) ? uniq.concat(curr) : uniq;
      }, []);
    }

    if (identifier === 'prefix' || identifier === 'first' || identifier === 'last') {
      elems = filterHelper('name', identifier);
    } else {
      elems = filterHelper('features', identifier)
    }

    if (selection) {
      selection = 'all';
    }

    this.setState({ 
      filter: identifier,
      showFilter: true,
      options: elems,
      selection
    });

  }
  numericFilter = (data) => {
    this.setState({
      showFilter: false,
      selection: 'custom',
      comparisonFilter: data,
      reset: true
    });
  }
  select = (event) => {
    this.setState({
      selection: event.target.value,
      reset: true
    });
  }
  closeFilter = () => {
    this.setState({
      showFilter: false
    });
  }
  resetFilter = () => {
    this.setState({ filter: null, reset: false });
  }
  sort = (type, col, dir) => {
    let { data } = this.state;
    // helper function to sort the data based on user selection
    function sortLetters(data, section, direction) {
      if (direction === 'up') {
        data = data.sort((a,b) => {
          let curr = (a[section][col]) ? a[section][col] : '!';
          let next = (b[section][col]) ? b[section][col] : '!';
          if (curr < next) return -1;
          if (curr > next) return 1;
          return 0;
        });
      } else {
        data = data.sort((a,b) => {
          let curr = (a[section][col]) ? a[section][col] : '!';
          let next = (b[section][col]) ? b[section][col] : '!';
          if (curr > next) return -1;
          if (curr < next) return 1;
          return 0;
        });
      }
      return data;
    }

    if (type === 'name') {
      data = sortLetters(data, 'name', dir);
    } else if (type === 'features') {
      if (col === 'gender') {
        data = sortLetters(data, 'features', dir);
      } else if (dir === 'up') {
        data = data.sort((a,b) => b.features[col] - a.features[col]);
      } else {
        data = data.sort((a,b) => a.features[col] - b.features[col]);
      }
    }

    this.setState({ data });

  }
  edit = (ref) => {
    // use the refs escape hatch to locate edited table cells in the DOM
    // store the user's edits in React state until onBlur triggers a save event
    // Editing is made possible using content-editable
    let edit = ReactDOM.findDOMNode(this.refs[ref]).innerHTML;
    this.setState({ edit, ref });

  }
  save = () => {
    // onBlur triggers save event for a cell:
    // the cell is idenfitied using the prefix, first, and last as a unique identifiers
    // and the cell index to identify which cell was modified
    // this identification ensures values can be modified even when the data is in a filtered view
    let { data, edit, ref } = this.state;
    let x = ref[0];
    let id = ref.substr(1);
    let y;
    // determine the original 'y' coordinate of the cell
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.prefix + data[i].name.first + data[i].name.last === id) {
        y = i;
      }
    }
    if (edit === '') edit = null;
    // switch on the 'x' coordinate and modify that cell appropriately at 'y' depth
    switch (+x) {
      case 0:
        data[y].name.prefix = edit;
        break;
      case 1:
        data[y].name.first = edit;
        break;
      case 2:
        data[y].name.last = edit;
        break;
      case 3:
        data[y].features.gender = edit;
        break;
      case 4:
        data[y].features.height = +edit;
        break;
      case 5:
        data[y].features.weight = +edit;
        break;
      case 6:
        data[y].features.age = +edit;
        break;
      case 7:
        data[y].features.has_nose = edit;
        break;
    }
    this.setState({ data, reload: true });
    // recalculate stats if one of the stat cells was modified
    if (x > 3 && x < 7) {
      this.setStats();
    }
  }
  render() {
    let { schema, data, filter, selection, stats, comparisonFilter: compare } = this.state;
    let filterText;
    if (filter) {
      filterText = filter.slice(0,1).toUpperCase() + filter.substr(1);
      if (filter === 'first' || filter === 'last') filterText += ' Name'
    }
    // handle filtering the table if a filter has been applied
    if (filter && selection && selection !== 'all') {
      data = data.filter(item => {
        if (filter === 'prefix' || filter === 'first' || filter === 'last') {
          if (selection === 'NULL') {
            return (!item.name[filter]);
          }
          return item.name[filter] === selection;
        } else if (selection === 'custom') {
          let { filterType: type } = compare;
          if (type === 'less') {
            return item.features[filter] < compare.range[0];
          } else if (type === 'greater') {
            return item.features[filter] > compare.range[0];
          } else if (type === 'range') {
            return (item.features[filter] > compare.range[0] && item.features[filter] < compare.range[1]);
          };
        } else if (typeof item.features[filter] === 'boolean') {
          let status = (item.features[filter]) ? 'TRUE' : 'FALSE';
          return status === selection;
        } else {
          if (selection === 'NULL') {
            return (!item.features[filter]);
          } else if (item.features[filter]) {
            return item.features[filter].toString() === selection;  
          }
        };
      });
    }
    // render first header
    let renderTopHeader = schema.sections.map((section, i) => {
      return (
        <th colSpan={section.attributes.length} key={i}>
          {section.name}
        </th>
      );
    });
    // render second header
    let renderSubHeader = schema.sections.map(section => {
      return section.attributes.map((attr, i) => {
        return (
          <th key={i}>
            <a className='name' onClick={this.filter.bind(this, attr.name)}>{attr.name}</a>
            <a className='up' href="#" onClick={this.sort.bind(this, section.name, attr.name, 'up')}>&nbsp;&and;&nbsp;</a>
            <a className='down' href="#" onClick={this.sort.bind(this, section.name, attr.name, 'down')}>&or;</a>
          </th>
        );
      });
    });
    // render chart data
    let renderTable = data.map((entry, idx) => {
      let vals = [
        entry.name.prefix,
        entry.name.first,
        entry.name.last,
        entry.features.gender,
        entry.features.height,
        entry.features.weight,
        entry.features.age,
        entry.features.has_nose
      ];
      return (
        <tr className='data-row' key={idx}>
          {vals.map((val, i) => {
            let ref = (i.toString() + entry.name.prefix + entry.name.first + entry.name.last);
            let text;
            if (val === null || typeof val === 'undefined') {
              text = 'NULL';
            } else if (typeof val === 'boolean') {
              text = (val) ? 'TRUE' : 'FALSE';
            } else {
              text = val;
            }
            return (
              <td
                ref={ref}
                onBlur={this.save}
                onInput={this.edit.bind(this, ref)}
                contentEditable='true'
                className={(val === null || typeof val === 'undefined') && 'null'} key={i}>
                {text}
              </td>
            );
          })}
        </tr>
      );
    });
    // render header row for showing stats
    let renderAvgHeader = schema.sections.map(section => {
      return section.attributes.map((attr, i) => {
        let title;
        if (attr.name === 'height' || attr.name === 'weight') {
          title = 'average';
        } else if (attr.name === 'age') {
          title = 'sum'
        };
        return (
          <th key={i} className={title && 'statHeader'}>
            {title}
          </th>
        )
       })
    });
    // render average height, weight, and total age values
    let renderStats = schema.sections.map(section => {
      return section.attributes.map((attr, i) => {
        let stat;
        if (attr.name === 'height') {
          stat = stats.avgHeight;
        } else if (attr.name === 'weight') {
          stat = stats.avgWeight;
        } else if (attr.name === 'age') {
          stat = stats.sumAge;
        };
        return (
          <td key={i} className={stat && 'stat'}>
            {stat}
          </td>
        )
       })
    });
    return (
      <div>
        <h1>Here's the supertable test (refactored with React):</h1>
        <h2>Features:</h2>
        <p className='sub1'>&#8226; Average height and weight calculated; total age calculated.</p>
        <p className='sub1'>&#8226; Click in a cell to make edits, click outside to save edits.</p>
        <p className='sub2'>&#8226; Click a column header to filter entries by that column (only filters 1 column at a time).</p>
        <p className='sub3'>&#8226; Numeric columns (height, weight, and age) can be filtered with custom comparisons.</p>
        <p className='sub4'>&#8226; Reload original data after any number of edits.</p>
        <div className='flexContainer'>
          <div>
            <table>
              <tbody>
                <tr className='header sections'>{renderTopHeader}</tr>
                <tr className='header attributes'>{renderSubHeader}</tr>
                {renderTable}
                <tr>{renderAvgHeader}</tr>
                <tr>{renderStats}</tr>
              </tbody>
            </table>
          </div>
          {this.state.showFilter && <div className='filterContainer'>
            <p>Filter the Table by {filterText}:</p>
            {(filter === 'weight' || filter === 'height' || filter === 'age') ?
              <CustomFilter
                submit={this.numericFilter}
                close={this.closeFilter}
                filter={filter}/>
              :
              <div>
                <select value={this.state.selection} onChange={this.select}>
                <option value='select'>Select a Filter</option>
                <option value='all'>Show All</option>
                {this.state.options.map((opt, idx) => {
                  return (
                    <option value={opt} key={idx}>{opt}</option>
                  );
                })}
              </select>
              <span className='closeFilter' onClick={this.closeFilter}>&times;</span>
            </div>}
          </div>}
          {this.state.reset && <div className='customFilter'>
            <button onClick={this.resetFilter} className='resetBtn'>Clear Filter</button>
          </div>}
        </div>
        {this.state.reload && <button className='reloadBtn' onClick={this.reload}>Reload Data</button>}
      </div>
    );
  }
};