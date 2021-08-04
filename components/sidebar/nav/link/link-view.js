import Link from 'next/link';

const SideBarNavLinkView = ({ component }) => {
	return (
		<Link href={`/components/${component.page}`}>
			<a className='pl-20 py-4 w-full sidebar-nav-link-color'>
				{component.name}
			</a>
		</Link>
	);
};

export default SideBarNavLinkView;
