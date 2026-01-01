/**

Custom logic for Freddy AI Agent to handle

safety-critical refusal patterns. */

exports.handleMedicalInquiry = function(payload) { const input = payload.user_input.toLowerCase(); const medicalKeywords = ['symptoms', 'blood pressure', 'heart rate', 'dosage', 'illness'];

const containsMedicalQuery = medicalKeywords.some(keyword => input.includes(keyword));

if (containsMedicalQuery) {
    return {
        action: "trigger_flow",
        flow_id: "safety_escalation_flow",
        message: "Safety Trigger: Medical query detected. Routing to human support."
    };
}

return {
    action: "continue_search_kb"
};


};