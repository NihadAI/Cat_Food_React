import { render } from '../../utils/test-utils';
import CartCounter from '.';

describe('Smoke test', () => {
	it('should render', () => {
		const { asFragment } = render(<CartCounter />);

		expect(asFragment()).toMatchSnapshot();
	});
});
