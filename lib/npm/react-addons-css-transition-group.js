/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

declare module 'react-addons-css-transition-group' {
  declare type ReactCSSTransitionGroupNames = {
    enter?: string,
    enterActive?: string,
    leave?: string,
    leaveActive?: string,
    appear?: string,
    appearActive?: string
  };

  declare type ReactCSSTransitionName = string | ReactCSSTransitionGroupNames;

  declare type Props = {
    transitionName: ReactCSSTransitionName,
    transitionAppear?: boolean,
    transitionEnter?: boolean,
    transitionLeave?: boolean,
    transitionAppearTimeout?: number,
    transitionEnterTimeout?: number,
    transitionLeaveTimeout?: number
  };

  declare type DefaultProps = {
    transitionAppear: boolean,
    transitionEnter: boolean,
    transitionLeave: boolean
  };

  declare class ReactCSSTransitionGroup extends React$Component<DefaultProps, Props, void> {
    props: Props;
    static defaultProps: DefaultProps;
  }

  declare var exports: typeof ReactCSSTransitionGroup;
}
