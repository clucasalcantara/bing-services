import { expect } from 'chai'
import sinon from 'sinon'

import searchBingImages from "../src/api"

describe('searchBingImages', () => {
	let sandBox
	let server

	beforeEach(() => {
		sandbox = sinon.sandbox.create()
		server = sandbox.useFakeServer()
	})

	afterEach(() => {
		server.restore()
		sandbox.restore()
	})

	it('should returns and response typeof object', () => {
			searchBingImages("cats")
			.then(response => {
					expect(response).to.be.an('Object')
			})
	})
})
