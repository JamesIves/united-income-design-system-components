import {mount} from 'enzyme';
import React from 'react';
import {Link, MemoryRouter} from 'react-router-dom';
import test from 'tape';
import Button from './Button';
import {colors} from '../../../constants/colors';

test('Button - rendering', (t) => {
  t.plan(2);

  const buttonComponent = mount(<Button onClick={() => null}>Testing</Button>);

  t.equal(
    buttonComponent.find('button').length,
    1,
    'should render as an html button'
  );

  const linkComponent = mount(
    <MemoryRouter>
      <Button to="/url">Testing</Button>
    </MemoryRouter>
  );

  t.equal(linkComponent.find(Link).length, 1, 'should render as a Link');
});

test('Button - disabling', (t) => {
  t.plan(2);

  const buttonComponent = mount(
    <Button disabled onClick={() => null}>
      Testing
    </Button>
  );

  t.true(
    buttonComponent
      .find('button')
      .first()
      .prop('disabled'),
    'should render as disabled button'
  );

  const linkComponent = mount(
    <MemoryRouter>
      <Button disabled to="/url">
        Testing
      </Button>
    </MemoryRouter>
  );

  t.true(
    linkComponent
      .find(Link)
      .first()
      .hasClass('disabled'),
    'should include "disabled" class'
  );
});

test('Button - variant', (t) => {
  t.plan(2);

  const variantPrimary = mount(<Button variant="primary">Hello</Button>);

  t.true(
    variantPrimary
      .find('button')
      .first()
      .hasClass('btn-primary'),
    'should render a primary button'
  );

  const noVariant = mount(<Button>Hello</Button>);

  t.false(
    noVariant
      .find('button')
      .first()
      .hasClass('btn-primary'),
    'should not have a variant class'
  );
});

test('Button - loading', (t) => {
  t.plan(3);

  const loadingPrimary = mount(
    <Button variant="primary" isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingPrimary.find('Spinner').prop('fill'),
    colors.white,
    'Shows white spinner'
  );

  const loadingSecondaryDark = mount(
    <Button variant="secondary" dark isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingSecondaryDark.find('Spinner').prop('fill'),
    colors.stratos,
    'Shows colored spinner'
  );

  const loadingTertiaryLight = mount(
    <Button variant="tertiary" light isLoading>
      Hello
    </Button>
  );

  t.equals(
    loadingTertiaryLight.find('Spinner').prop('fill'),
    colors['violet-blue'],
    'Shows colored spinner'
  );
});
