// Mock-only payment boundary. Create and verify subscriptions on a secure backend;
// never expose provider secrets or trust payment verification in this frontend.
export async function createSubscription(planId) { return { provider: import.meta.env.VITE_PAYMENT_PROVIDER || 'mock', planId, status: 'pending' } }
export async function verifyPayment(payment) { return { verified: false, payment } }
export async function cancelSubscription(subscriptionId) { return { subscriptionId, status: 'cancellation_requested' } }
export async function getSubscriptionStatus(userId) { return { userId, status: 'inactive' } }