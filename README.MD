# is_a
### Utility function to help determine value types

### Installation
<code>
    npm install is_a
</code>

### Example usage
<code>
    const is_a = require('is_a');

    // ... 

    if( is_a('email', 'foobar@foo.com') ){
        console.log('This is a valid email address!');
    }else{
        console.log('This email addres is not valid!');
    }
</code>

### Value Check Types
 - Email <code>is_a('email', value);</code>
 - Domain <code>is_a('domain', value);</code>
 - URL <code>is_a('url', value);</code>
 - Truthy <code>is_a('truthy', value);</code>
 - Falsy <code>is_a('falsy', value);</code>
