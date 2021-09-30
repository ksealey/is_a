const is_a = require('../index');

describe('is_a Core', ()=>{
    it('should detect numbers', ()=>{
        expect(is_a('number', 10)).toBe(true);
        expect(is_a('number', '10')).toBe(false);
    });

    it('should detect string', ()=>{
        expect(is_a('string', '10')).toBe(true);
        expect(is_a('string', 10)).toBe(false);
    });

    it('should detect emails', ()=>{
        expect(is_a('email', 'foobar@foobar.com')).toBe(true);
        expect(is_a('email', 'foo.bar.123@foo.bar.ca')).toBe(true);
        expect(is_a('email', 'foo.bar.123@foo')).toBe(false);
        expect(is_a('email', 'foo@foo.c')).toBe(false);
        expect(is_a('email', 'foo@foo.')).toBe(false);
        expect(is_a('email', 'foo@foo')).toBe(false);
        expect(is_a('email', 'foo@')).toBe(false);
    });

    it('should detect domains', ()=>{
        expect(is_a('domain', 'foobar.com')).toBe(true);
        expect(is_a('domain', 'foo.bar.com')).toBe(true);
        expect(is_a('domain', 'foo-bar.com')).toBe(true);
        expect(is_a('domain', 'r.com')).toBe(true);
        expect(is_a('domain', 'r.photography')).toBe(true);
        expect(is_a('domain', '123r.photography')).toBe(true);
        expect(is_a('domain', '123-e.photography')).toBe(true);
        expect(is_a('domain', 'foo.')).toBe(false)
        expect(is_a('domain', '.foo.')).toBe(false)
        expect(is_a('domain', '.foo')).toBe(false)
    });

    it('should detect urls', ()=>{
        expect(is_a('url', 'http://foobar.com')).toBe(true);
        expect(is_a('url', 'http://foo.bar.com')).toBe(true);
        expect(is_a('url', 'http://foo.bar.com?det=true')).toBe(true);
        expect(is_a('url', 'http://foo-bar.com')).toBe(true);
        expect(is_a('url', 'http://r.com')).toBe(true);
        expect(is_a('url', 'https://r.photography')).toBe(true);
        expect(is_a('url', 'https://123r.photography')).toBe(true);
        expect(is_a('url', 'https://123-e.photography')).toBe(true);
        expect(is_a('url', 'https://123-e.photography?a=1&b=2')).toBe(true);
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
})