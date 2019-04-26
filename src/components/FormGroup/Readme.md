A FormField describe a field in your form, that is, the combination of a label, and it's own field

```js
<React.Fragment>
    <FormGroup 
      name="profile" 
      label="Profile Details"
      fields={[{
            name:"username", 
            label:"Username",
            type:"text",
            placeholder:"testName", 
            onValueChange: (value) => console.log(value),
          },
          {
            name:"firstname", 
            label:"First Name",
            type:"text",
            placeholder:"my first name", 
            onValueChange: (value) => console.log(value),
          },
         {
           name:"password", 
           label:"Password",
           type:"password",
           value: 'blahblahblah', 
           onValueChange: (value) => console.log(value),
      }]}
    />
    
    <FormGroup 
      name="player" 
      label="Player Data"
      fields={[{
            name:"points", 
            label:"Points",
            type:"number",
            placeholder:"1000", 
            onValueChange: (value) => console.log(value),
      }, {
             name:"points", 
             label:"Points",
             type:"number",
             placeholder:"1000", 
             onValueChange: (value) => console.log(value),
       }]}
    />
</React.Fragment>
```
