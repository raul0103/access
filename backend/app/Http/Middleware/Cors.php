<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    protected $allowed_origins;

    public function __construct()
    {
        $this->allowed_origins = config('app.allowed_origins');
    }

    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($origin = $this->checkOrigin($request)) {
            $response->headers->set('Access-Control-Allow-Origin', $origin);
        }

        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        $response->headers->set('Access-Control-Allow-Credentials', 'true');

        return $response;
    }

    protected function checkOrigin($request)
    {
        $origin = $request->headers->get('Origin');

        if (in_array($origin, $this->allowed_origins)) {
            return $origin;
        }

        return false;
    }
}
