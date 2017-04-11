var authModule = angular.module('authModule', []);

require('./less/auth.less');
require('./template')(authModule);
require('./controller')(authModule);
require('./directive')(authModule);