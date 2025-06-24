import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-tabs.html',
  styleUrl: './switch-tabs.scss'
})
export class SwitchTabs {
  activeTab: 'search' | 'add' = 'search';
  
  @Output() tabChanged = new EventEmitter<'search' | 'add'>();

  setActiveTab(tab: 'search' | 'add') {
    this.activeTab = tab;
    this.tabChanged.emit(tab); 
  }
}