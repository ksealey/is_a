# is_a
### Utility function to help determine value types
<p>`is_a` is for the most part a collection of frequently used regex patterns to determine value types.</p>

### Installation
<code>
    npm install @defriction/is_a
</code>

### Example usage
<code>
    import is_a from '@defriction/is_a';

    // ... 

    if( is_a('email', 'foobar@foo.com') ){
        console.log('This is a valid email address!');
    }else{
        console.log('This email addres is not valid!');
    }
</code>

### Value Check Types
 - Email <code>is_a('email', value);</code>
 - Email Characters<code>is_a('email_character', value);</code>
 - Domain <code>is_a('domain', value);</code>
 - Domain Characters <code>is_a('domain_character', value);</code>
 - URL <code>is_a('url', value);</code>
 - Phone <code>is_a('phone', value);  // +1(555) 555-5555 and 555.555.5555 and 555-555-5555 are true</code>
 - Strong Password <code>is_a('strong_password', value); // Min 8 characters, Uppercase letter, Lowercase Letter, Special Character (@$!%*?&)</code>
 - Truthy <code>is_a('truthy', value);</code>
 - Falsy <code>is_a('falsy', value);</code>
 - String <code>is_a('string', value);</code>
 - Number <code>is_a('number', value); // false against NaN</code>
