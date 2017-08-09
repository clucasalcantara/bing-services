import { expect } from 'chai'
import sinon from 'sinon'

import getImages from "../src/api"

describe('getImages', () => {
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
			getImages("cats")
			.then(response => {
					expect(response).to.be.an('Object')
			})
	})
})
