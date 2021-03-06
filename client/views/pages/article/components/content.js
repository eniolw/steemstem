// Helpers
Template.content.helpers({
   // Get the list of all beneficiaries
   GetBeneficiaries: function(bnf)
   {
     if(bnf)
     {
       beneficiary_array = []
       for (i=0; i < bnf.length; i++)
         beneficiary_array.push([bnf[i]['account'], bnf[i]['weight']/100])
       beneficiary_array.sort(function(b,a){ return(a[1]-b[1]);})
       for (i=0; i < beneficiary_array.length; i++)
       {
         if(i<beneficiary_array.length-1)
           beneficiary_array[i][1]='('+beneficiary_array[i][1].toString()+"%); "
         else
           beneficiary_array[i][1]='('+beneficiary_array[i][1].toString()+"%)."
       }
       return beneficiary_array
     }
   },

  // Function allowing to display a single beneficiary
  DisplayBeneficiary: function(beneficiary) { return beneficiary[0] },

  // Function allowing to display a share of a single beneficiary
  DisplayShare: function(beneficiary) { return beneficiary[1] },

  // Check whether the post has been posted with steemstem.io
  UsingSSio: function() { return (this.json_metadata && this.json_metadata.app=='steemstem') },

  // Check whether the author has set SteemSTEM as a beneficiary
  SetBeneficiary: function()
  {
    bnf_list = []
    for(i=0; i<this.beneficiaries.length;i++)
      bnf_list.push(this.beneficiaries[i].account)
    return bnf_list.includes('steemstem')
  }


})

// Event associated to the vote button
Template.content.events({
    'click  #vote': function (event) {
        event.preventDefault()
        event.stopPropagation();
        $('.ui.vote.modal').remove()
        $('article').append(Blaze.toHTMLWithData(Template.votemodal, { project: this }));
        $('.ui.vote.modal.' + this.permlink).modal('setting', 'transition', 'scale').modal('show')
        Template.votemodal.init()
    },
})
