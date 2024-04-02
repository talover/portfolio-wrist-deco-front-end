import React from 'react';
import clsx from 'clsx';
import { Box, Pagination, useMediaQuery } from '@mui/material';
import { MainContainer } from '@/components/MainContainer';
import { BoxInfo } from '@/components/BoxInfo';
import { ListingInfo } from '@/components/ListingInfo';
import { Certificates } from './Certificates';
import { Contacts, ContactsData, LanguageData } from './Contacts';
import { Ratings } from './Ratings';
import { Comment, CommentProps } from './Comment';
import { Button } from '@/components/Button';

import { useStyles } from './Styles';
import { Theme } from '@mui/material/styles';

type CommentsProps = {
	className?: string;
	description?: {
		title?: string;
		content: React.ReactNode;
	};
	contacts?: {
		phone?: ContactsData;
		fax?: ContactsData;
		email?: ContactsData;
		site?: ContactsData;
		address?: ContactsData;
		language?: LanguageData;
		vat?: ContactsData;
	};
	list?: CommentProps[];
};
export const Comments = ({ className, description, contacts, list }: CommentsProps) => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	return (
		<MainContainer>
			<Box className={clsx(classes.section, className)}>
				<Box className={classes.row}>
					<Box component={'aside'} className={classes.sideBar}>
						<ListingInfo
							firstItem={{ number: '256', description: 'watches sold' }}
							secondItem={{ number: '117', description: 'active listings', href: '/' }}
						/>
						<Certificates />
						{contacts && (
							<Contacts
								phone={contacts.phone && { name: contacts.phone.name, href: contacts.phone.href }}
								fax={contacts.fax && { name: contacts.fax.name, href: contacts.fax.href }}
								email={contacts.email && { name: contacts.email.name, href: contacts.email.href }}
								site={contacts.site && { name: contacts.site.name, href: contacts.site.href }}
								address={contacts.address && { name: contacts.address.name, href: contacts.address.href }}
								language={contacts.language && { languages: contacts.language.languages }}
								vat={contacts.vat && { name: contacts.vat.name }}
							/>
						)}
					</Box>
					<Box className={classes.content}>
						{description && (
							<BoxInfo title={description.title}>
								<Box dangerouslySetInnerHTML={{ __html: description.content as string }} />
							</BoxInfo>
						)}
						<Ratings />
						<BoxInfo title="Reviews">
							{list ? (
								<Box>
									<Box className={classes.list}>
										{list.map((item, index) => (
											<Comment
												key={index}
												avatar={item.avatar}
												name={item.name}
												date={item.date}
												rating={item.rating}
												verified={item.verified}
												description={item.description}
												like={item.like}
												onClickLike={() => console.log('like')}
												dislike={item.dislike}
												onClickDislike={() => console.log('dislike')}
											/>
										))}
									</Box>
									<Button className={classes.btnMore} color={'secondaryLight'} type={'outline'}>
										Show more
									</Button>
									<Pagination count={lg ? 10 : 4} className={classes.pagination} />
								</Box>
							) : (
								'no comments'
							)}
						</BoxInfo>
					</Box>
				</Box>
			</Box>
		</MainContainer>
	);
};
