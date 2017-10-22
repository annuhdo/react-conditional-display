import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Display from '../src/index';

test('Nothing should be displayed if there is no if', () => {
  const wrapper = shallow(
    <Display>
    	<h1>Hello</h1>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(false);
});

test('Child should be displayed when if is true', () => {
  const wrapper = shallow(
    <Display if={true}>
    	<h1>Hello</h1>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(true);
});

test('Children should be displayed when if is true, wrapped in a div', () => {
  const wrapper = shallow(
    <Display if={true}>
    	<h1>Hello</h1>
    	<p>Im the second child</p>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(true);
  expect(wrapper.contains(<p>Im the second child</p>)).toEqual(true);
  expect(wrapper.find('h1').closest('div').length).toEqual(1);
  expect(wrapper.find('p').closest('div').length).toEqual(1);
});

test('Nothing should be displayed when if is false', () => {
  const wrapper = shallow(
    <Display if={false}>
    	<h1>Hello</h1>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(false);
});

test('Nothing should be displayed when if is false, even with other props', () => {
  const wrapper = shallow(
    <Display if={false} tag="section" className="classHere">
    	<h1>Hello</h1>
    	<p>Im the second child</p>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(false);
  expect(wrapper.contains(<p>Im the second child</p>)).toEqual(false);
  expect(wrapper.find('h1').length).toEqual(0);
  expect(wrapper.find('p').length).toEqual(0);
});

test('"Else" should be displayed when if is false', () => {
  const wrapper = shallow(
    <Display if={false} else={<section><h2>Hey, Im the second render</h2></section>}>
    	<h1>Hello</h1>
    	<p>Im the second child</p>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(false);
  expect(wrapper.contains(<p>Im the second child</p>)).toEqual(false);
  expect(wrapper.find('h1').length).toEqual(0);
  expect(wrapper.find('p').length).toEqual(0);
  expect(wrapper.contains(<section><h2>Hey, Im the second render</h2></section>)).toEqual(true);
});

test('"Else" will not display when if is true', () => {
  const wrapper = shallow(
    <Display if={true} else={<section><h2>Hey, Im the second render</h2></section>}>
    	<h1>Hello</h1>
    	<p>Im the second child</p>
    </Display>
  );

  expect(wrapper.contains(<h1>Hello</h1>)).toEqual(true);
  expect(wrapper.contains(<p>Im the second child</p>)).toEqual(true);
  expect(wrapper.contains(<section><h2>Hey, Im the second render</h2></section>)).toEqual(false);
});

test('Multiple children with a tag will be wrapped in that tag', () => {
  const wrapper = shallow(
    <Display if={true} else={<section><h2>Hey, Im the second render</h2></section>} tag="h1">
    	<span className="first">Hello</span>
    	<span className="second">Im the second child</span>
    </Display>
  );

  expect(wrapper.contains(<span className="first">Hello</span>)).toEqual(true);
  expect(wrapper.contains(<span className="second">Im the second child</span>)).toEqual(true);
  expect(wrapper.find('.first').closest('h1').length).toEqual(1);
  expect(wrapper.find('.second').closest('h1').length).toEqual(1);
});

test('Multiple children with a className will be wrapped in that className', () => {
  const wrapper = shallow(
    <Display if={true} else={<section><h2>Hey, Im the second render</h2></section>} className="parent">
    	<span className="first">Hello</span>
    	<span className="second">Im the second child</span>
    </Display>
  );

  expect(wrapper.contains(<span className="first">Hello</span>)).toEqual(true);
  expect(wrapper.contains(<span className="second">Im the second child</span>)).toEqual(true);
  expect(wrapper.find('.first').closest('div').hasClass('parent')).toEqual(true);
  expect(wrapper.find('.second').closest('div').hasClass('parent')).toEqual(true);
});

test('Multiple children with a tag and className will be wrapped in that tag and className', () => {
  const wrapper = shallow(
    <Display if={true} else={<section><h2>Hey, Im the second render</h2></section>} className="parent" tag="h1">
    	<span className="first">Hello</span>
    	<span className="second">Im the second child</span>
    </Display>
  );

  expect(wrapper.contains(<span className="first">Hello</span>)).toEqual(true);
  expect(wrapper.contains(<span className="second">Im the second child</span>)).toEqual(true);
  expect(wrapper.find('.first').closest('h1').hasClass('parent')).toEqual(true);
  expect(wrapper.find('.second').closest('h1').hasClass('parent')).toEqual(true);
});