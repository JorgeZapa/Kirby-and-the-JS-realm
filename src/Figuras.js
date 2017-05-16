var FiguraPinguino = cc.Class.extend({
    space:null,
    sprite:null,
    shape:null,
    layer:null,
ctor:function (space, posicion, layer) {
    this.space = space;
    this.layer = layer;


    var framesAnimacion = [];
    var str = "figura_pinguino.png";
    var frame = cc.spriteFrameCache.getSpriteFrame(str);
    framesAnimacion.push(frame);
    var animacion = new cc.Animation(framesAnimacion, 0.2);
    var actionAnimacionBucle =
        new cc.RepeatForever(new cc.Animate(animacion));
    // Crear Sprite - Cuerpo y forma
    this.sprite = new cc.PhysicsSprite("#figura_pinguino.png");
    // Cuerpo estática , no le afectan las fuerzas
    var body = new cp.StaticBody();
    body.setPos(posicion);
    this.sprite.setBody(body);
    // Los cuerpos estáticos nunca se añaden al Space
    var radio = this.sprite.getContentSize().width / 2;
    // forma
    this.shape = new cp.CircleShape(body, radio , cp.vzero);
    this.shape.setCollisionType(tipoFiguraHielo);
    // Nunca genera colisiones reales
    this.shape.setSensor(true);
    // forma estática
    this.space.addStaticShape(this.shape);
    // añadir sprite a la capa

    // ejecutar la animación
    this.sprite.runAction(actionAnimacionBucle);

    layer.addChild(this.sprite,10);
   }
});

var FiguraFuego = cc.Class.extend({
    space:null,
    sprite:null,
    shape:null,
    layer:null,
ctor:function (space, posicion, layer) {
    this.space = space;
    this.layer = layer;


    var framesAnimacion = [];
    var str = "figura_fuego.png";
    var frame = cc.spriteFrameCache.getSpriteFrame(str);
    framesAnimacion.push(frame);
    var animacion = new cc.Animation(framesAnimacion, 0.2);
    var actionAnimacionBucle =
        new cc.RepeatForever(new cc.Animate(animacion));
    // Crear Sprite - Cuerpo y forma
    this.sprite = new cc.PhysicsSprite("#figura_fuego.png");
    // Cuerpo estática , no le afectan las fuerzas
    var body = new cp.StaticBody();
    body.setPos(posicion);
    this.sprite.setBody(body);
    // Los cuerpos estáticos nunca se añaden al Space
    var radio = this.sprite.getContentSize().width / 2;
    // forma
    this.shape = new cp.CircleShape(body, radio , cp.vzero);
    this.shape.setCollisionType(tipoFiguraFuego);
    // Nunca genera colisiones reales
    this.shape.setSensor(true);
    // forma estática
    this.space.addStaticShape(this.shape);
    // añadir sprite a la capa

    // ejecutar la animación
    this.sprite.runAction(actionAnimacionBucle);

    layer.addChild(this.sprite,10);
   }
});

var FiguraAire = cc.Class.extend({
    space:null,
    sprite:null,
    shape:null,
    layer:null,
ctor:function (space, posicion, layer) {
    this.space = space;
    this.layer = layer;


    var framesAnimacion = [];
    var str = "figura_aire.png";
    var frame = cc.spriteFrameCache.getSpriteFrame(str);
    framesAnimacion.push(frame);
    var animacion = new cc.Animation(framesAnimacion, 0.2);
    var actionAnimacionBucle =
        new cc.RepeatForever(new cc.Animate(animacion));
    // Crear Sprite - Cuerpo y forma
    this.sprite = new cc.PhysicsSprite("#figura_aire.png");
    // Cuerpo estática , no le afectan las fuerzas
    var body = new cp.StaticBody();
    body.setPos(posicion);
    this.sprite.setBody(body);
    // Los cuerpos estáticos nunca se añaden al Space
    var radio = this.sprite.getContentSize().width / 2;
    // forma
    this.shape = new cp.CircleShape(body, radio , cp.vzero);
    this.shape.setCollisionType(tipoFiguraAire);
    // Nunca genera colisiones reales
    this.shape.setSensor(true);
    // forma estática
    this.space.addStaticShape(this.shape);
    // añadir sprite a la capa

    // ejecutar la animación
    this.sprite.runAction(actionAnimacionBucle);

    layer.addChild(this.sprite,10);
   }
});


