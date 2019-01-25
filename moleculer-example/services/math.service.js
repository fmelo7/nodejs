"use strict";

module.exports = {
	name: "math",

	/**
	 * Service settings
	 */
	settings: {},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 *
		 */
		testAdd(ctx) {
			return "Add " + Number(5) + " + " + Number(3) + " = 8";
		},

		/**
		 *
		 */
		add: {
			params: {
				a: "string",
				b: "string"
			},
			handler(ctx) {
				return "Add = " + (Number(ctx.params.a) + Number(ctx.params.b));
			}
		}
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {}
};
