import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://fakesite.com', 'Ruby on Rails', 150, 120, 15, 'tester@example.com')
  proposalTwo: Proposal = new Proposal(99, 'ZXC Company', 'http://fakesite.com', 'Ruby on Rails', 150, 120, 15, 'tester@example.com')
  proposalThree: Proposal = new Proposal(300, 'QWERTY Company', 'http://fakesite.com', 'Ruby on Rails', 150, 120, 15, 'tester@example.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}