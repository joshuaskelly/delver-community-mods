# items-guns
An example of how to use the Gun class in Delver.

## Overview

```
.
├── data
│   ├── animations.dat
│   ├── entities.dat
│   ├── items.dat
│   └── spritesheets.dat
├── guns.png
└── levels
    └── shooting-range.bin
```

### data/animations.dat
Provides custom animations for held items. Primarily used for defining attack animations. 

> NOTE  

There must be at least two frames defined for the LerpedAnimation object.

### data/entities.dat
Provides custom entity definitions. These will appear in the editor right click menu, and can be referenced by prefabs.

### data/items.dat
Provides custom item definitions. These will be used by the Delver engine when creating loot drops. 

### data/spritesheets.dat
Provides custom sprite defintions. These tell the Delver engine where your custom spritesheet is located, and how to slice them into individual sprites.

### guns.png
Custom art used for the guns and ammo.

### levels/shooting-range.bin
Level used for testing out the gun entities.
