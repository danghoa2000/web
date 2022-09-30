<?php

namespace App\Http\Services\Admin;

use App\Models\Category;

class CategoryService
{

    public function get($request)
    {
        $categories =  Category::select('id', 'name')
            ->where('type', $request->type) // 0 - thư mục sản phẩm, 1 - thư mục bài đăng.
            ->limit($request->pageSize)
            ->offset(($request->currentPage - 1) * $request->pageSize)
            ->filter($request)
            ->get();
        return $categories;
    }
}
