/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

declare module 'react-addons-css-transition-group' {
  declare type TransitionNameFull = {
    enter?: string,
    enterActive?: string,
    leave?: string,
    leaveActive?: string,
    appear?: string,
    appearActive?: string
  };

  declare type TransitionName = string | TransitionNameFull;

  declare type Props = {
    transitionName: TransitionName,
    transitionAppear?: boolean,
    transitionEnter?: boolean,
    transitionLeave?: boolean,
    transitionAppearTimeout?: number,
    transitionEnterTimeout?: number,
    transitionLeaveTimeout?: number
  };

  declare type DefaultProps = {
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
  };

  declare class ReactCSSTransitionGroup extends React$Component {
    props: Props;
    static defaultProps: DefaultProps;
  }

  declare var exports: typeof ReactCSSTransitionGroup;
}
