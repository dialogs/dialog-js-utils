/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

declare module "react-transition-group/CSSTransitionGroup" {
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

  declare class ReactCSSTransitionGroup extends React$Component<Props, void> {}

  declare module.exports: typeof ReactCSSTransitionGroup;
}
