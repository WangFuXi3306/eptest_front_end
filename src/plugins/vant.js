import Vue from 'vue';

import {
	Button,
	Dialog,
	Notify,
	Overlay,
	Icon,
	Field,
	Toast,
	Cell, 
	CellGroup,
	Image as VanImage,
	Tab,
	Tabs,
	Uploader,
	Popup,
	Checkbox, 
	CheckboxGroup,
	RadioGroup, 
	Radio,
	Lazyload,
	ImagePreview,
	Empty,
	Loading,
	ActionSheet,
	DatetimePicker,
	Picker,
	Search
} from 'vant';




Vue.use(Button);
Vue.use(Dialog);
Vue.use(Notify);
Vue.use(Overlay);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Lazyload);
Vue.use(Empty);
Vue.use(Loading);
Vue.use(ActionSheet);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(Search);


Vue.prototype.$preview = ImagePreview;

// 将所有 Toast 的展示时长设置为 1200 毫秒
Toast.setDefaultOptions({ duration: 1500 });
// 将所有 Notify 的展示时长设置为 1200 毫秒
Notify.setDefaultOptions({ duration: 1200 });



