A Form

```js 
config={
    urls: {
        get: 'https://jsonplaceholder.typicode.com/users/1',
        create: 'https://jsonplaceholder.typicode.com/users',
        update: 'https://jsonplaceholder.typicode.com/users/1',
    },
    groups: [{
        name: 'profileDetails',
        label: 'Profile Details',
        fields: [{
            'field': 'id',
            'label': 'Id',
            'type': 'number',
            'readonly': true,
        }, {
            'field': 'name',
            'label': 'Name',
            'type': 'text',
        }, {
            'field': 'username',
            'label': 'Username',
            'type': 'text',
        }]
    }, {
        name: 'company',
        label: 'Company Details',
        fields: [{
            'field': 'company.name',
            'label': 'Name',
            'type': 'text',
        }, {
            'field': 'company.catchPhrase',
            'label': 'Catch phrase',
            'type': 'text',
        }]
    }]  
}

;<CRUDForm
    mode= 'MODE_NEW'
    config={config}
/>
```
