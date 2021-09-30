# ISA
### Utility function to help determine value types

### Installation
<code>
    npm install isa
</code>

### Example usage
<code>
    const isa = require('isa');

    // ... 
    
    if( isa('email', 'foobar@foo.com') ){
        console.log('This is a valid email address!');
    }else{
        console.log('This email addres is not valid!');
    }
</code>

### Value Check Types
 - Email <code>isa('email', value);</code>
 - Domain <code>isa('domain', value);</code>
 - URL <code>isa('url', value);</code>
 - Truthy <code>isa('truthy', value);</code>
 - Falsy <code>isa('falsy', value);</code>
