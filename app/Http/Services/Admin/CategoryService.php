<?php

namespace App\Http\Services\Admin;

use App\Models\Category;

class CategoryService
{

    public function get($request)
    {
        // 0 - thư mục sản phẩm, 1 - thư mục bài đăng.
        return Category::with('subCategories')
            ->where('type', $request->type)
            ->offset(($request->currentPage - 1) * $request->pageSize)
            ->limit($request->pageSize)
            ->orderBy("updated_at", "desc")
            ->get();
    }
}
