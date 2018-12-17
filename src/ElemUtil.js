import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export let Title = (props) => (
	<p className="title">
		{ props.children }
	</p>
);

export let SubTitle = (props) => (
	<p className="subtitle">

	</p>
);

export let TitleContainer = (props) => (
	<Row>
		<Title> 	
			{ props.title }
		</Title>
	</Row>
);

export let SubTitleContainer = (props) => (
	<Row>
		<SubTitle> 	
			{ props.subtitle }
		</SubTitle>
	</Row>
);
