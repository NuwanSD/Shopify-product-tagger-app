/// <reference types="react" />
import type { BadgeAction, DisableableAction, ActionListSection, MenuGroupDescriptor } from '../../types';
export declare type BulkAction = DisableableAction & BadgeAction;
declare type BulkActionListSection = ActionListSection;
export interface BulkActionsProps {
    /** List is in a selectable state */
    selectMode?: boolean;
    /** Actions that will be given more prominence */
    promotedActions?: (BulkAction | MenuGroupDescriptor)[];
    /** List of actions */
    actions?: (BulkAction | BulkActionListSection)[];
    /** Disables bulk actions */
    disabled?: boolean;
    /** Callback when selectable state of list is changed */
    onSelectModeToggle?(selectMode: boolean): void;
    /** Callback when more actions button is toggled */
    onMoreActionPopoverToggle?(isOpen: boolean): void;
    /** If the BulkActions is currently sticky in view */
    isSticky?: boolean;
    /** The width of the BulkActions */
    width: number;
}
export declare function BulkActions(props: BulkActionsProps): JSX.Element;
export {};
//# sourceMappingURL=BulkActions.d.ts.map