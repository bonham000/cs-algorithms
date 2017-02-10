
class Package {
  constructor(name, dependencies) {
    this.name = name;
    this.dependencies = dependencies;
  }
};

var packages = [
  new Package('React', ['babel', 'react-dom']),
  new Package('App', ['React']),
  new Package('babel', []),
  new Package('react-dom', []),
];

function install(packages, installed = []) {

  for (var i = 0; i < packages.length; ) {

    if (packages[i].dependencies.length === 0) {
      installed.push(packages[i].name);
      packages.splice(i, 1);
      continue;
    } else {
      for (var j = 0; j < packages[i].dependencies.length; ) {
        if (installed.indexOf(packages[i].dependencies[j]) !== -1) {
          packages[i].dependencies.splice(j, 1);
          continue;
        } else {
          j++;
        }
      }
      i++;
    }

  }

  if (packages.length > 0) install(packages, installed);

  return installed;

}

function install2(packages) {

  var installed = new Set();
  
  function checkPackage(pkg) {
    for (var module of pkg) {
      if (!installed.has(module)) {
        return false;
      }
    }
    return true;
  }
  
  function helper(modules, current) {
    
    if (modules[current].dependencies.length === 0 || checkPackage(modules[current].dependencies)) {
      installed.add(modules[current].name);
      modules.splice(current, 1);
      if (current === modules.length) {
        current = 0;
      }
    } else {
      current = (current === modules.length - 1) ? 0 : current + 1;
    }
  
    if (modules.length > 0) helper(modules, current);
    
  }

  helper(packages, 0);

  return installed.values()
  
  
}

// console.log(install(packages));
// console.log(install2(packages));