const is_a  = require('../index');
const faker = require('faker');

describe('is_a Core', ()=>{
    it('should detect numbers', ()=>{
        expect(is_a('number', faker.datatype.number())).toBe(true);
        expect(is_a('number', faker.datatype.number() + '')).toBe(false);
    });

    it('should detect string', ()=>{
        expect(is_a('string', faker.datatype.number() + '')).toBe(true);
        expect(is_a('string', faker.datatype.number())).toBe(false);
    });

    it('should detect emails', ()=>{
        expect(is_a('email', 'foobar@foobar.com')).toBe(true);
        expect(is_a('email', 'foo.bar.123@foo.bar.ca')).toBe(true);
        expect(is_a('email', faker.internet.email())).toBe(true);
        expect(is_a('email', 'foo.bar.123@foo')).toBe(false);
        expect(is_a('email', 'foo@foo.c')).toBe(false);
        expect(is_a('email', 'foo@foo.')).toBe(false);
        expect(is_a('email', 'foo@foo')).toBe(false);
        expect(is_a('email', 'foo@')).toBe(false);
        expect(is_a('email', 'foo.@some.co')).toBe(false);
        expect(is_a('email', '.foo.@some.co')).toBe(false);
        expect(is_a('email', '.foo@some.co')).toBe(false)
        expect(is_a('email', 'foo.@some.co')).toBe(false)
        expect(is_a('email', 'foo-@some.co')).toBe(false)
        expect(is_a('email', '-foo@some.co')).toBe(false)
        expect(is_a('email', 'foo--bar@some.co')).toBe(false)
        expect(is_a('email', 'foo..bar@some.co')).toBe(false)
    });

    it('should detect email characters', ()=>{
        expect(is_a('email_character', 'abc')).toBe(false);
        expect(is_a('email_character', 'ab')).toBe(false);
        expect(is_a('email_character', 'a')).toBe(true);
        expect(is_a('email_character', 0)).toBe(true);
        expect(is_a('email_character', '.')).toBe(true);
        expect(is_a('email_character', '_')).toBe(true);
        expect(is_a('email_character', '@')).toBe(true);
        expect(is_a('email_character', 'P')).toBe(true);
        expect(is_a('email_character', '-')).toBe(false);
        expect(is_a('email_character', '?')).toBe(false);
        expect(is_a('email_character', '/')).toBe(false);
        expect(is_a('email_character', '\\')).toBe(false);
    });

    it('should detect domains', ()=>{
        expect(is_a('domain', 'foobar.com')).toBe(true);
        expect(is_a('domain', 'foo.bar.com')).toBe(true);
        expect(is_a('domain', 'foo-bar.com')).toBe(true);
        expect(is_a('domain', 'foo.photography')).toBe(true);
        expect(is_a('domain', '123r.photography')).toBe(true);
        expect(is_a('domain', '123-e.photography')).toBe(true);
        expect(is_a('domain', faker.internet.domainName())).toBe(true);
        expect(is_a('domain', faker.internet.domainWord())).toBe(false);
        expect(is_a('domain', 'foo.')).toBe(false)
        expect(is_a('domain', '.foo.')).toBe(false)
        expect(is_a('domain', '.foo')).toBe(false)
        expect(is_a('domain', 'foo..com')).toBe(false)
        expect(is_a('domain', 'foo-.com')).toBe(false)
        expect(is_a('domain', '-foo.com')).toBe(false)
        expect(is_a('domain', 'foo--bar.com')).toBe(false)
        expect(is_a('domain', 'foo..bar.com')).toBe(false)
        expect(is_a('domain', 'a.com')).toBe(false)
    });

    it('should detect domain characters', ()=>{
        ['a', 'Z', '0', '9', 0, 9, '-', '.'].map((c)=>{
            expect(is_a('domain_character', c)).toBe(true);
        });

        ['abc', 'a1', ' ', '_', '/', '~', '`', '!', '#', '%', '^', '&', '*', '=', '(', ')', '\'', '"', ';', ':', '?', '/', '>', '<', ',', '[', ']', '|', '@'].map((c)=>{
            expect(is_a('domain_character', c)).toBe(false);
        })
    });

    it('should detect urls', ()=>{
        expect(is_a('url', 'http://foobar.com')).toBe(true);
        expect(is_a('url', 'http://foo.bar.com')).toBe(true);
        expect(is_a('url', 'http://foo.bar.com?det=true')).toBe(true);
        expect(is_a('url', 'http://foo-bar.com')).toBe(true);
        expect(is_a('url', 'http://fo.com')).toBe(true);
        expect(is_a('url', 'https://fo.photography')).toBe(true);
        expect(is_a('url', 'https://123r.photography')).toBe(true);
        expect(is_a('url', 'https://123-e.photography')).toBe(true);
        expect(is_a('url', 'https://123-e.photography?a=1&b=2')).toBe(true);
        expect(is_a('url', faker.internet.url())).toBe(true);
        expect(is_a('url', 'htt://gmail.com')).toBe(false)
        expect(is_a('url', 'http//gmail.com')).toBe(false)
        expect(is_a('url', 'http:/gmail.com')).toBe(false)
        expect(is_a('url', 'http://.gmail.com')).toBe(false)
        expect(is_a('url', 'http://-gmail.com')).toBe(false)
        expect(is_a('url', 'http://gmail..com')).toBe(false)
        expect(is_a('url', 'http://gmail-.com')).toBe(false)
        expect(is_a('url', 'http://gmail--l.com')).toBe(false)
        expect(is_a('url', 'http://gmail..l.com')).toBe(false)
        expect(is_a('url', 'http://gmail.ll.com')).toBe(true)
        expect(is_a('url', 'https://r.com')).toBe(false)
        expect(is_a('url', 'https://foo.c')).toBe(false)
        expect(is_a('url', 'https://foo.')).toBe(false)
        expect(is_a('url', 'https://.foo.')).toBe(false)
        expect(is_a('url', 'https://.foo')).toBe(false)
    });

    it('should detect truthy', ()=>{
        expect(is_a('truthy', true)).toBe(true);
        expect(is_a('truthy', 1)).toBe(true);
        expect(is_a('truthy', '1')).toBe(true);
        expect(is_a('truthy', [])).toBe(true);
        expect(is_a('truthy', {})).toBe(true);
        expect(is_a('truthy', false)).toBe(false);
        expect(is_a('truthy', undefined)).toBe(false);
        expect(is_a('truthy', null)).toBe(false);
        expect(is_a('truthy', 0)).toBe(false);
        expect(is_a('truthy', '')).toBe(false);
    });

    it('should detect falsy', ()=>{
        expect(is_a('falsy', true)).toBe(false);
        expect(is_a('falsy', 1)).toBe(false);
        expect(is_a('falsy', '1')).toBe(false);
        expect(is_a('falsy', [])).toBe(false);
        expect(is_a('falsy', {})).toBe(false);

        expect(is_a('falsy', false)).toBe(true);
        expect(is_a('falsy', undefined)).toBe(true);
        expect(is_a('falsy', null)).toBe(true);
        expect(is_a('falsy', 0)).toBe(true);
        expect(is_a('falsy', '')).toBe(true);
    });

    it('should detect strong passwords', ()=>{
        expect(is_a('strong_password', 'passwor')).toBe(false);
        expect(is_a('strong_password', 'password')).toBe(false);
        expect(is_a('strong_password', 'Password')).toBe(false);
        expect(is_a('strong_password', 'Password1')).toBe(false);
        expect(is_a('strong_password', 'P@ssword1')).toBe(true);
    });

    it('should detect phone numbers', ()=>{
        expect(is_a('phone', '(777) 777 7777')).toBe(true);
        expect(is_a('phone', '+12 (555) 555 5555')).toBe(true);
        expect(is_a('phone', '+12(555).555.5555')).toBe(true);
        expect(is_a('phone', '+14444444444')).toBe(true);
        expect(is_a('phone', '333.333.3333')).toBe(true);

        expect(is_a('phone', '333 3333')).toBe(false);
        expect(is_a('phone', '666777888')).toBe(false);
        expect(is_a('phone', '555 555 555')).toBe(false);
    })
})