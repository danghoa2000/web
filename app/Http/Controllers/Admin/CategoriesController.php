<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Admin\CategoryService;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    use AuthenticatesUsers;

    protected $categoriesService;

    public function __construct(CategoryService $categoriesService)
    {
        $this->categoriesService = $categoriesService;
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index(Request $request)
    {
        $categories = $this->categoriesService->get($request);
        return response()->json($categories);
    }
}
