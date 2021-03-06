/*jshint bitwise:true, indent:2, curly:true, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true, white:true*/
/*global XT:true, XV:true, enyo:true*/

(function () {

  XT.extensions.billing.initListRelations = function () {

    enyo.kind({
      name: "XV.ReceivableTaxListRelations",
      kind: "XV.ListRelations",
      parentKey: "receivable",
      components: [
        {kind: "XV.ListItem", components: [
          {kind: "FittableColumns", components: [
            {kind: "XV.ListColumn", classes: "short", fit: true, components: [
              {kind: "XV.ListAttr", attr: "taxCode.code", classes: "bold"}
            ]},
            {kind: "XV.ListColumn", components: [
              {kind: "XV.ListAttr", attr: "taxAmount", classes: "bold"}
            ]}
          ]}
        ]}
      ]
    });

    enyo.kind({
      name: "XV.ReceivableApplicationListRelations",
      kind: "XV.ListRelations",
      parentKey: "receivable",
      components: [
        {kind: "XV.ListItem", components: [
          {kind: "FittableColumns", components: [
            {kind: "XV.ListColumn", classes: "short", fit: true, components: [
              {kind: "XV.ListAttr", attr: "documentNumber", classes: "bold"}
            ]},
            {kind: "XV.ListColumn", components: [
              {kind: "XV.ListAttr", attr: "applicationDate"}
            ]}
          ]}
        ]}
      ]
    });

    /**
     * @class XV.CashReceiptLineList
     * @extends XV.List
     * @see XV.CashReceiptApplicationsList
     */
    enyo.kind({
      name: 'XV.CashReceiptLineListRelation',
      kind: 'XV.ListRelations',
      collection: 'XM.CashReceiptLineListItemCollection',
      parentKey: 'cashReceipt',
      components: [
        {kind: "XV.ListItem", components: [
          {kind: "FittableColumns", components: [
            {kind: "XV.ListColumn", classes: "short", fit: true, components: [
              {kind: "XV.ListAttr", attr: "receivable.documentNumber", classes: "bold"}
            ]},
            {kind: "XV.ListColumn", components: [
              {kind: "XV.ListAttr", attr: "amount"}
            ]}
          ]}
        ]}
      ]
    });
  };

  XV.registerModelList('XM.CashReceiptLineListItem', 'XV.CashReceiptLineList');
}());
