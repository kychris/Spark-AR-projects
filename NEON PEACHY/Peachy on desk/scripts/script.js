const Scene = require('Scene')
const TouchGestures = require('TouchGestures')
const NativeUI = require('NativeUI')
const Textures = require('Textures')

const planeTracker = Scene.root.find('planeTracker0')
const horizontalIcon = Textures.get('horizontal(1)')
const verticalIcon = Textures.get('vertical(1)')
const movingIcon = Textures.get('moving(1)')

const picker = NativeUI.picker
const index = 0

const pickerConfiguration = {
	selectedIndex : index,

	items: [
		{ image_texture: horizontalIcon },
		{ image_texture: verticalIcon },
		{ image_texture: movingIcon }
	]
}

picker.configure(pickerConfiguration)
picker.visible = true


picker.selectedIndex.monitor().subscribe(function(index){
	if(index.newValue == 0)
		planeTracker.trackingMode = Scene.TrackingMode.PLANE
	else if(index.newValue == 1)
		planeTracker.trackingMode = Scene.TrackingMode.VERTICAL_PLANE
	else if(index.newValue == 2)
		planeTracker.trackingMode = Scene.TrackingMode.MOVING_OBJECT
})

TouchGestures.onTap().subscribe(function(touch){
	planeTracker.trackPoint(touch.location)
})

