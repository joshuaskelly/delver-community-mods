## Procedural Outdoors Example

Delver has some limited overworld support at the moment, this is an example of how to start playing around with it. This should be considered highly experimental and in beta, expect lots of bugs!

Most of the fun stuff happens here in the `dungeons.dat` file, where multiple layers of noise are defined to create the overworld, and premade feature areas are added in. These can either be positioned statically, like the starting ruins at chunk 0,0 or given to a list of feature areas that can be created in any empty chunk.

Stuff that would be fun to do, but is not yet implemented in the Delver Engine yet:
* Entrances into multiple dungeons
* Day / Night cycle
* Random NPCs for towns?