const fs = require('fs')
const t = require('tap')

const dotenv = require('../lib/main')

const parsed = dotenv.parse(fs.readFileSync('tests/.env-value-vars', { encoding: 'utf8' }), true)

t.type(parsed, Object, 'should return an object')

// VALUE_VAR_1=Value1
t.equal(parsed.VALUE_VAR_1, 'Value1', 'Value1 is assigned')

// VALUE_VAR_2=Value2
t.equal(parsed.VALUE_VAR_2, 'Value2', 'Value2 is assigned')

// VALUE_VAR_3=${VALUE_VAR_1}
t.equal(parsed.VALUE_VAR_3, 'Value1', 'Value1 is assigned to VALUE_VAR_3 var')

// VALUE_VAR_4=${VALUE_VAR_3} # VALUE_VAR_3 should already have Value1 assigned to it
t.equal(parsed.VALUE_VAR_4, 'Value1', 'Value1 is assigned to VALUE_VAR_4 var')
