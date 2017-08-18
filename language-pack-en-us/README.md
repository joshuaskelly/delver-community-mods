# language-pack-en-us
The English language strings shipped by Delver. Useful as a starting point for a translation.

## Usage
The translation table is stored as a [JSON](http://en.wikipedia.org/wiki/JSON) object in the [strings.dat](./data/strings.dat) file. Each entry has the form:

```json
"items.ExampleItem.stringIdentifier": {
    "class":"com.interrupt.dungeoneer.game.LocalizedString",
    "localizedName":"Translate this property",
    "comment":"This property is not used by the game. It is meant to help give context for the translator."
}
```

### String Identifier
> DO NOT CHANGE  

The string identifier used by the Delver engine to determine which string to show. In the above example the string identifier is _"items.ExampleItem.stringIdentifier"_.  If you change this value, the engine will not be able to find the translated string and will fallback to the English text.

### class
> DO NOT CHANGE  

The class property is used by the Delver engine to transform this text into a usable translation object. If you change this value, the engine will fail the entire translation file and English will be shown.

### localizedName
The localizedName property is the string that the Delver engine will show. In the above example the value for the localizedName is _"Translate this property"_. This is the resouce that needs translation.

### comment
The comment property is not used by the Delver engine, but is meant to serve to provide context for the translator. In the example above the value for the comment is _"This property is not used by the game. It is meant to help give context for the translator."_. This property can be left blank, which is indicated by two double quotes ("").

```json
"Iron sword":{
    "class":"com.interrupt.dungeoneer.game.LocalizedString",
    "localizedName":"Espada de hierro",
    "form":"feminine singular",
    "comment":""
},
"entities.Item.itemConditionBroken":{
    "class":"com.interrupt.dungeoneer.game.LocalizedString",
    "localizedName":"rota",
    "forms":{
        "feminine singular":"rota",
        "feminine plural":"rotas",
        "masculine singular":"roto",
        "masculine plural":"rotos"
    },
    "comment":""
},
```

### form
The form property is used to describe the gender and count of a noun. This will be used to find a matching adjective. The form property will be only honored on items. In the above example the form is "feminine singular". Do note that this property is just a string and can be whatever you like.

### forms
The forms property is an object that maps a form to a translated string. The above example will map "feminine singular" to "rota." If an appropriate mapping cannot be found, the localizedName property will be used.

## Troubleshooting
### Valid JSON
It is recommended to use a [JSON validator](http://www.google.com/#q=json+validator) to ensure that you have well formed JSON. If your JSON is not well formed the Delver engine may not load your content, and potentially could crash.

### Certain Glyphs Are Not Displaying
Ensure that the translation file is encoded as UTF-8.

### Additional LocalizedString Properties
While adding additional JSON properties is still valid JSON, it will cause the Delver engine to crash. If you want to leave translation notes please feel free to use the comment property.
