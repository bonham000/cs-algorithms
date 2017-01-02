// This leads to a crucial point
// to understand about objects as data structures: <b>they provide access to stored elements in constant time.</b> Internally, the object has a way of knowing
// exactly where the <code>followers</code> property is so that when it is accessed it can be returned instantly without having to search through the contents
// of the object. In contrast, if these properties were stored in an <code>array</code> you would have to iterate through the array to find a specific value.