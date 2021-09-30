const {isa} = require('../index');

describe('Isa Core', ()=>{
    it('should detect numbers', ()=>{
        expect(isa('number', 10)).toBe(true);
        expect(isa('number', '10')).toBe(false);
    });

    it('should detect string', ()=>{
        expect(isa('string', '10')).toBe(true);
        expect(isa('string', 10)).toBe(false);
    });

    it('should detect emails', ()=>{
        expect(isa('email', 'foobar@foobar.com')).toBe(true);
        expect(isa('email', 'foo.bar.123@foo.bar.ca')).toBe(true);
        expect(isa('email', 'foo.bar.123@foo')).toBe(false);
        expect(isa('email', 'foo@foo.c')).toBe(false);
        expect(isa('email', 'foo@foo.')).toBe(false);
        expect(isa('email', 'foo@foo')).toBe(false);
        expect(isa('email', 'foo@')).toBe(false);
    });

    it('should detect domains', ()=>{
        expect(isa('domain', 'foobar.com')).toBe(true);
        expect(isa('domain', 'foo.bar.com')).toBe(true);
        expect(isa('domain', 'foo-bar.com')).toBe(true);
        expect(isa('domain', 'r.com')).toBe(true);
        expect(isa('domain', 'r.photography')).toBe(true);
        expect(isa('domain', '123r.photography')).toBe(true);
        expect(isa('domain', '123-e.photography')).toBe(true);
        expect(isa('domain', 'foo.')).toBe(false)
        expect(isa('domain', '.foo.')).toBe(false)
        expect(isa('domain', '.foo')).toBe(false)
    });

    it('should detect urls', ()=>{
        expect(isa('url', 'http://foobar.com')).toBe(true);
        expect(isa('url', 'http://foo.bar.com')).toBe(true);
        expect(isa('url', 'http://foo.bar.com?det=true')).toBe(true);
        expect(isa('url', 'http://foo-bar.com')).toBe(true);
        expect(isa('url', 'http://r.com')).toBe(true);
        expect(isa('url', 'https://r.photography')).toBe(true);
        expect(isa('url', 'https://123r.photography')).toBe(true);
        expect(isa('url', 'https://123-e.photography')).toBe(true);
        expect(isa('url', 'https://123-e.photography?a=1&b=2')).toBe(true);
        expect(isa('url', 'https://foo.c')).toBe(false)
        expect(isa('url', 'https://foo.')).toBe(false)
        expect(isa('url', 'https://.foo.')).toBe(false)
        expect(isa('url', 'https://.foo')).toBe(false)
    });

    it('should detect truthy', ()=>{
        expect(isa('truthy', true)).toBe(true);
        expect(isa('truthy', 1)).toBe(true);
        expect(isa('truthy', '1')).toBe(true);
        expect(isa('truthy', [])).toBe(true);
        expect(isa('truthy', {})).toBe(true);

        expect(isa('truthy', false)).toBe(false);
        expect(isa('truthy', undefined)).toBe(false);
        expect(isa('truthy', null)).toBe(false);
        expect(isa('truthy', 0)).toBe(false);
        expect(isa('truthy', '')).toBe(false);
    });

    it('should detect falsy', ()=>{
        expect(isa('falsy', true)).toBe(false);
        expect(isa('falsy', 1)).toBe(false);
        expect(isa('falsy', '1')).toBe(false);
        expect(isa('falsy', [])).toBe(false);
        expect(isa('falsy', {})).toBe(false);

        expect(isa('falsy', false)).toBe(true);
        expect(isa('falsy', undefined)).toBe(true);
        expect(isa('falsy', null)).toBe(true);
        expect(isa('falsy', 0)).toBe(true);
        expect(isa('falsy', '')).toBe(true);
    });
})