// 
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import guid from '../src/guid';
// Defines a Mocha test suite to group tests of similar kind together
describe("Guid", () => {	
	
        it('should have length of 32 without separators', ()=>{
            assert.equal(32,guid('').length);
        })
        
        it('should have length of 36 with default separator', ()=>{
            assert.equal(36,guid().length);
        })
	
});