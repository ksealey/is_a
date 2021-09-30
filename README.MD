# ISA
### Utility function to help determine value types

### Installation
<code>
    npm install isa
</code>

### Example usage
<code>
    const isa = require('isa');
    
    if( isa('email', 'foobar@foo.com') ){
        console.log('This is a valid email address!');
    }else{
        console.log('This email addres is not valid!');
    }
</code>

### Value Check Types
 - Email isa('email', value);
 - Domain isa('domain', value);
 - URL isa('url', value);
 - Truthy isa('truthy', value);
 - Falsy isa('falsy', value);
