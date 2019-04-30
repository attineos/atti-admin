A Form

```js
initialState = { 
    username: 'SomeUsername',
    password: 'thisIsMyPass',
    email: 'someTest@someTest.fr',
    currentPoints: 145,
    currentPosition: 14,
    currentHiddenPoints: 154,
    isAdmin: false,
    isBanned: false,
}
 
config=[{
    name: 'profileDetails',
    label: 'Profile Details',
    fields: [{
        'field': 'username',
        'label': 'Username',
        'type': 'text',
        'group': 'profileDetails'
    }, {
        'field': 'password',
        'label': 'Password',
        'type': 'password',
        'group': 'profileDetails'
    }, {
        'field': 'email',
        'label': 'Email',
        'type': 'email',
        'group': 'profileDetails'
    }]
}, {
    name: 'playerData',
    label: 'Player Details',
    fields: [{
        'field': 'currentPoints',
        'label': 'Current Points',
        'type': 'number',
        'group': 'playerData'
    }, {
        'field': 'currentPosition',
        'label': 'Current Position',
        'type': 'number',
        'readonly': true,
        'group': 'playerData'
    }]
    /** currentHiddenPoints will not show up because undeclared */
}]

;<Form
  data={state}
  config={config}
  onDataChange={(data) => {
    console.log("new data is", data)
    setState(data)
  }}
  onSubmit={() => console.log("Please send", state)}
/>
```
