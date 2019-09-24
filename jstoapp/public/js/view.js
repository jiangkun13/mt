
var viewData = {
    fov: 95,
    fovmax: 120,
    fovmin: 70,
    hlookat: 0.0,
    hlookatmax: 180,
    hlookatmin: -180,
    vlookat: 0.0,
    vlookatmax: 90,
    vlookatmin: -90,
}

//设置初始视角
function setView(){
    viewData.fov = k.get('view.fov');
    viewData.hlookat = k.get('view.hlookat');
    viewData.vlookat = k.get('view.vlookat');

    saveView(viewData);
}