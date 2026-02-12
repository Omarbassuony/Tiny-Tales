const BASE_URL = "https://tinytales.trendline.marketing/api";

async function apiRequest(
  endpoint: string,
  method: "GET" | "POST" = "POST",
  body?: Record<string, string>,
  token?: string | null
) {
  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let requestBody: FormData | undefined;
  if (body) {
    requestBody = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      requestBody!.append(key, value);
    });
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: requestBody,
  });

  const data = await res.json();
  if (!res.ok || data.status === false) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

export async function register(fields: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  mobile_country_code: string;
}) {
  return apiRequest("/auth/register", "POST", fields);
}

export async function login(email: string, password: string) {
  return apiRequest("/auth/login", "POST", { email, password });
}

export async function verifyEmail(code: string, token: string) {
  return apiRequest("/auth/verify-email", "POST", { code }, token);
}

export async function resendVerifyCode(token: string) {
  return apiRequest("/auth/verify-email/resend-code", "POST", {}, token);
}

export async function getUserData(token: string) {
  return apiRequest("/auth/user-data", "GET", undefined, token);
}

export async function logout(token: string) {
  return apiRequest("/auth/logout", "POST", {}, token);
}
