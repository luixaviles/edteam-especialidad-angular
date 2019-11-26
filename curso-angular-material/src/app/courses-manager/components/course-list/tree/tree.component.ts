import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Specialties',
    children: [
      {name: 'Angular'},
      {name: 'JavaScript'},
    ]
  },
  {
    name: 'Technologies',
    children: [
      {
        name: 'Angular',
        children: [
          {name: 'TypeScript desde Cero'},
          {name: 'Angular Material'},
        ]
      },
      {
        name: 'JavaScript',
        children: [
          {name: 'JQuery'},
          {name: 'ES6'},
        ]
      }
    ]
  }
];

interface FlatNode {
  expandable: boolean;
  name: string,
  level: number
}

@Component({
  selector: 'ed-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );

  dataSource =
    new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_:number, node: FlatNode) => node.expandable;

  constructor() { }

  ngOnInit() {
    this.dataSource.data = TREE_DATA;
  }

}
