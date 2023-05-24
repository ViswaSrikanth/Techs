import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as $ from 'jquery'
const joint = require('../../../../node_modules/jointjs/dist/joint.js');

@Component({
  selector: 'app-transaction-flows',
  templateUrl: './transaction-flows.component.html',
  styleUrls: ['./transaction-flows.component.css']
})
export class TransactionFlowsComponent implements OnInit {

  subtitle: string = "Transaction Flows";

  constructor() { }

  ngOnInit(): void {
    // var $:JQuery;
    // Canvas where sape are dropped
    var graph = new joint.dia.Graph,
      paper = new joint.dia.Paper({
        el: $('#paper'),
        width: 800,
        height: 600,
        // align: 'center',
        model: graph
      });
    console.log("drag and drop...");

    // Canvas from which you take shapes
    var stencilGraph = new joint.dia.Graph,
      stencilPaper = new joint.dia.Paper({
        el: $('#stencil'),
        // height: 60,
        width: 240,
        model: stencilGraph,
        interactive: false
      });

    var r1 = new joint.shapes.basic.Rect({
      position: {
        x: 10,
        y: 10
      },
      size: {
        width: 100,
        height: 40
      },
      attrs: {
        text: {
          text: 'Rect1'
        }
      }
    });
    var r2 = new joint.shapes.basic.Rect({
      position: {
        x: 120,
        y: 10
      },
      size: {
        width: 100,
        height: 40
      },
      attrs: {
        text: {
          text: 'Rect2'
        }
      }
    });

    var s1 = new joint.shapes.basic.Rect({
      position: {
        x: 40,
        y: 70
      },
      size: {
        width: 40,
        height: 40
      },
      attrs: {
        text: {
          text: 'Sqr1'
        }
      }
    });

    stencilGraph.addCells([r1, r2, s1]);

    stencilPaper.on('cell:pointerdown', function (cellView, e, x, y) {
      $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;opacity:.7;pointer-event:none;"></div>');
      var flyGraph = new joint.dia.Graph,
        flyPaper = new joint.dia.Paper({
          el: $('#flyPaper'),
          model: flyGraph,
          interactive: false
        }),
        flyShape = cellView.model.clone(),
        pos = cellView.model.position(),
        offset = {
          x: x - pos.x,
          y: y - pos.y
        };

      flyShape.position(0, 0);
      flyGraph.addCell(flyShape);
      $("#flyPaper").offset({
        left: e.pageX - offset.x,
        top: e.pageY - offset.y
      });
      $('body').on('mousemove.fly', function (e) {
        $("#flyPaper").offset({
          left: e.pageX - offset.x,
          top: e.pageY - offset.y
        });
      });
      $('body').on('mouseup.fly', function (e) {
        var x = e.pageX,
          y = e.pageY,
          target = paper.$el.offset();

        // Dropped over paper ?
        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
          var s = flyShape.clone();
          s.position(x - target.left - offset.x, y - target.top - offset.y);
          graph.addCell(s);
        }
        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove();
        $('#flyPaper').remove();
      });
    });

    let elmnt = document.getElementById("canvas-main"); 
    console.log('Scroll Postion: ' + elmnt.scrollLeft);
    elmnt.scrollLeft = 400;
    elmnt.scrollTop = 300;
  }

  zoomIn() {
    console.log('zoomIn');
    $('#paper').css('transform', 'scale(1.5)');
  }

  zoomOut() {
    $('#paper').css('transform', 'scale(1)');
  }

}
