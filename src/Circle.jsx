let React = require('react');
let d3 = require('d3');

let Circle = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		x: React.PropTypes.number.isRequired,
		y: React.PropTypes.number.isRequired,
		r: React.PropTypes.number.isRequired,
		fill: React.PropTypes.string.isRequired,
		data: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.object
		]).isRequired,
		onMouseEnter: React.PropTypes.func,
		onMouseLeave: React.PropTypes.func
	},

	render() {
		let {x, y, r, width, height, fill, data, onMouseEnter, onMouseLeave} = this.props;

		return (
				<circle
			className="Circle"
			cx={x}
			cy={y}
			r={r}
			width={width}
			height={height}
			fill={fill}
			onMouseMove={ e => { onMouseEnter(e, data); } }
			onMouseLeave={ e => { onMouseLeave(e); } }
				/>
		);
	}
});

module.exports = Circle;
