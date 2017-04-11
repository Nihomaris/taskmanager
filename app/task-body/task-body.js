var taskModule = angular.module('taskModule', []);

require('./less/task.less');
require('./template')(taskModule);
require('./controller')(taskModule);
require('./directive')(taskModule);