Template.profilecard.rendered = function () {
    // $(document).ready(function () {
    //     $("#shape").roundSlider({
    //         value: '{{DisplayVotingPower voting_power last_vote_time 2}}',
    //         sliderType: "min-range",
    //         readOnly:true
    //     });
    // });
}

Template.profilecard.events({
    'click .header.name': function (event) {
        event.preventDefault()
        FlowRouter.go('/@' + this.name)
    },
})
