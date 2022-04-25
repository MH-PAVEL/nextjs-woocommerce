jQuery(function () {
  var $yourDesigner = $('#clothing-designer');
  
  var pluginOpts = {
    productsJSON: '/js/json/products_categories.json', //see JSON folder for products sorted in categories
    designsJSON: '/js/json/designs.json', //see JSON folder for designs sorted in categories
    stageWidth: 1200,
    editorMode: false,
    smartGuides: true,
    templatesDirectory: '/html/',
    //uiTheme: 'doyle',
    fonts: [
      { name: 'Helvetica' },
      { name: 'Times New Roman' },
      { name: 'Arial' },
      { name: 'Lobster', url: 'google' },
    ],
    customTextParameters: {
      colors: false,
      removable: true,
      resizable: true,
      draggable: true,
      rotatable: true,
      autoCenter: true,
      boundingBox: 'Base',
      curvable: true,
    },
    customImageParameters: {
      draggable: true,
      removable: true,
      resizable: true,
      rotatable: true,
      colors: '#000',
      autoCenter: true,
      boundingBox: 'Base',
    },
    actions: {
      top: ['download', 'print', 'snap', 'preview-lightbox'],
      right: ['magnify-glass', 'zoom', 'reset-product', 'qr-code', 'ruler'],
      bottom: ['undo', 'redo'],
      left: ['manage-layers', 'info', 'save', 'load'],
    },
  };

  var yourDesigner = new FancyProductDesigner($yourDesigner, pluginOpts);
});
