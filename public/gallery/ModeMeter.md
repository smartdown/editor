[Beer :beer:](:=AddDrink='Beer')
[Whisky :tropical_drink:](:=AddDrink='Whisky')

[Drinks](:!Drinks|json)

```javascript /playable/autoplay
env.Drinks = [];

this.dependOn.AddDrink = async () => {
  if (env.AddDrink) {
    env.Drinks.push(env.AddDrink);
    smartdown.set('AddDrink', '');
  }
};
```
