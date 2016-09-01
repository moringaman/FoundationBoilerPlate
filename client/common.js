import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'foundation-sites/dist/foundation.js';

Template.layout.rendered = function() {
$(document).foundation();
}